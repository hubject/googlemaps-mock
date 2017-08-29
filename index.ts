/*
Converted from googlemaps declaration files

---

The MIT License

Copyright (c) 2012 Folia A/S. http://www.folia.dk

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
*/

namespace tmp {

    import MapsEventListener = google.maps.MapsEventListener;
    import LatLngBoundsLiteral = google.maps.LatLngBoundsLiteral;
    import MapOptions = google.maps.MapOptions;
    import Projection = google.maps.Projection;
    import LatLngLiteral = google.maps.LatLngLiteral;
    import MapType = google.maps.MapType;
    import DataOptions = google.maps.Data.DataOptions;
    import FeatureOptions = google.maps.Data.FeatureOptions;
    import GeoJsonOptions = google.maps.Data.GeoJsonOptions;
    import StylingFunction = google.maps.Data.StylingFunction;
    import MarkerOptions = google.maps.MarkerOptions;
    import Attribution = google.maps.Attribution;
    import Icon = google.maps.Icon;
    import MarkerLabel = google.maps.MarkerLabel;
    import Place = google.maps.Place;
    import MarkerShape = google.maps.MarkerShape;
    import InfoWindowOptions = google.maps.InfoWindowOptions;
    import PolylineOptions = google.maps.PolylineOptions;
    import PolygonOptions = google.maps.PolygonOptions;
    import RectangleOptions = google.maps.RectangleOptions;
    import CircleOptions = google.maps.CircleOptions;
    import GroundOverlayOptions = google.maps.GroundOverlayOptions;
    import MapPanes = google.maps.MapPanes;
    import GeocoderRequest = google.maps.GeocoderRequest;
    import GeocoderResult = google.maps.GeocoderResult;
    import DirectionsRendererOptions = google.maps.DirectionsRendererOptions;
    import DirectionsResult = google.maps.DirectionsResult;
    import DirectionsRequest = google.maps.DirectionsRequest;
    import PathElevationRequest = google.maps.PathElevationRequest;
    import ElevationResult = google.maps.ElevationResult;
    import LocationElevationRequest = google.maps.LocationElevationRequest;
    import MaxZoomResult = google.maps.MaxZoomResult;
    import DistanceMatrixRequest = google.maps.DistanceMatrixRequest;
    import DistanceMatrixResponse = google.maps.DistanceMatrixResponse;
    import SaveWidgetOptions = google.maps.SaveWidgetOptions;
    import ImageMapTypeOptions = google.maps.ImageMapTypeOptions;
    import MapTypeStyle = google.maps.MapTypeStyle;
    import StyledMapTypeOptions = google.maps.StyledMapTypeOptions;
    import FusionTablesLayerOptions = google.maps.FusionTablesLayerOptions;
    import KmlLayerOptions = google.maps.KmlLayerOptions;
    import KmlLayerMetadata = google.maps.KmlLayerMetadata;
    import TrafficLayerOptions = google.maps.TrafficLayerOptions;
    import StreetViewPanoramaOptions = google.maps.StreetViewPanoramaOptions;
    import StreetViewLink = google.maps.StreetViewLink;
    import StreetViewLocation = google.maps.StreetViewLocation;
    import StreetViewPov = google.maps.StreetViewPov;
    import StreetViewPanoramaData = google.maps.StreetViewPanoramaData;
    import StreetViewLocationRequest = google.maps.StreetViewLocationRequest;
    import StreetViewPanoRequest = google.maps.StreetViewPanoRequest;
    import StyleOptions = google.maps.Data.StyleOptions;

    /***** MVC *****/

    /** Base class implementing KVO. */
    export class MVCObject {
        /**
         * The MVCObject constructor is guaranteed to be an empty function, and so you may inherit from MVCObject
         * by simply writing MySubclass.prototype = new google.maps.MVCObject();. Unless otherwise noted,
         * this is not true of other classes in the API, and inheriting from other classes in the API is not supported.
         */
        constructor() {
        }

        /**
         * Adds the given listener function to the given event name. Returns an identifier for this listener
         * that can be used with google.maps.event.removeListener.
         */
        addListener(eventName: string, handler: (...args: any[]) => void): MapsEventListener {
            return {
                remove() {
                }
            };
        }

        /** Binds a View to a Model. */
        bindTo(key: string, target: MVCObject, targetKey?: string, noNotify?: boolean): void {
        }

        changed(key: string): void {
        }

        /** Gets a value. */
        get(key: string): any {
            return {};
        }

        /**
         * Notify all observers of a change on this property. This notifies both objects that are bound
         * to the object's property as well as the object that it is bound to.
         */
        notify(key: string): void {
        }

        /** Sets a value. */
        set(key: string, value: any): void {
        }

        /** Sets a collection of key-value pairs. */
        setValues(values: any): void {
        }

        /**
         * Removes a binding. Unbinding will set the unbound property to the current value.
         * The object will not be notified, as the value has not changed.
         */
        unbind(key: string): void {
        }

        /** Removes all bindings. */
        unbindAll(): void {
        }
    }

    /** This class extends MVCObject. */
    export class MVCArray<T> extends MVCObject {
        /** A mutable MVC Array. */
        constructor(array?: T[]) {
            super()
        }

        /** Removes all elements from the array. */
        clear(): void {
        }

        /**
         * Iterate over each element, calling the provided callback.
         * The callback is called for each element like: callback(element, index).
         */
        forEach(callback: (elem: T, i: number) => void): void {
        }

        /**
         * Returns a reference to the underlying Array.
         * Warning: if the Array is mutated, no events will be fired by this object.
         */
        getArray(): T {
            return [] as any;
        }

        /** Returns the element at the specified index. */
        getAt(i: number): T {
            return {} as T;
        }

        /** Returns the number of elements in this array. */
        getLength(): number {
            return 0;
        }

        /** Inserts an element at the specified index. */
        insertAt(i: number, elem: T): void {
        }

        /** Removes the last element of the array and returns that element. */
        pop(): T {
            return {} as any;
        }

        /** Adds one element to the end of the array and returns the new length of the array. */
        push(elem: T): number {
            return 0;
        }

        /** Removes an element from the specified index. */
        removeAt(i: number): T {
            return {} as any;
        }

        /** Sets an element at the specified index. */
        setAt(i: number, elem: T): void {
        }
    }

    /***** Map *****/
    export class Map extends MVCObject {
        constructor(mapDiv: Element | null, opts?: MapOptions) {
            super();
        };

        fitBounds(bounds: LatLngBounds | LatLngBoundsLiteral): void {
        };

        getBounds(): LatLngBounds | null | undefined {
            return new LatLngBounds();
        };

        getCenter(): LatLng {
            return new LatLng(0, 0);
        };

        getDiv(): Element {
            return document.createElement('div');
        };

        getHeading(): number {
            return 0;
        }

        getMapTypeId(): MapTypeId | string {
            return MapTypeId.HYBRID;
        }

        getProjection(): Projection {
            return {
                fromLatLngToPoint(latLng: LatLng) {
                    return new Point(0, 0);
                },
                fromPointToLatLng(pixel: Point, noWrap?: boolean): LatLng {
                    return new LatLng(0, 0);
                }
            };
        }

        getStreetView(): StreetViewPanorama {
            return new StreetViewPanorama(document.createElement('div'));
        }

        getTilt(): number {
            return 0;
        }

        getZoom(): number {
            return 0;
        }

        panBy(x: number, y: number): void {
        }

        panTo(latLng: LatLng | LatLngLiteral): void {
        }

        panToBounds(latLngBounds: LatLngBounds | LatLngBoundsLiteral): void {
        }

        setCenter(latlng: LatLng | LatLngLiteral): void {
        }

        setHeading(heading: number): void {
        }

        setMapTypeId(mapTypeId: MapTypeId | string): void {
        }

        setOptions(options: MapOptions): void {
        }

        setStreetView(panorama: StreetViewPanorama): void {
        }

        setTilt(tilt: number): void {
        }

        setZoom(zoom: number): void {
        }

        controls: MVCArray<Node>[];
        data: Data;
        mapTypes: MapTypeRegistry;
        overlayMapTypes: MVCArray<MapType>;
    }

    /**
     * Identifiers for common MapTypes. Specify these by value, or by using the
     * constant's name. For example, 'satellite' or google.maps.MapTypeId.SATELLITE.
     */
    export enum MapTypeId {
        /** This map type displays a transparent layer of major streets on satellite images. */
        HYBRID,
        /** This map type displays a normal street map. */
        ROADMAP,
        /** This map type displays satellite images. */
        SATELLITE,
        /** This map type displays maps with physical features such as terrain and vegetation. */
        TERRAIN
    }

    /***** Controls *****/

    export enum MapTypeControlStyle {
        DEFAULT,
        DROPDOWN_MENU,
        HORIZONTAL_BAR
    }

    export enum ScaleControlStyle {
        DEFAULT
    }

    export enum ZoomControlStyle {
        DEFAULT,
        LARGE,
        SMALL
    }

    /**
     * Identifiers used to specify the placement of controls on the map. Controls are
     * positioned relative to other controls in the same layout position. Controls that
     * are added first are positioned closer to the edge of the map.
     */
    export enum ControlPosition {
        /** Elements are positioned in the center of the bottom row. */
        BOTTOM_CENTER,
        /**
         * Elements are positioned in the bottom left and flow towards the middle.
         * Elements are positioned to the right of the Google logo.
         */
        BOTTOM_LEFT,
        /**
         * Elements are positioned in the bottom right and flow towards the middle.
         * Elements are positioned to the left of the copyrights.
         */
        BOTTOM_RIGHT,
        /**
         * Elements are positioned on the left, above bottom-left elements, and flow upwards.
         */
        LEFT_BOTTOM,
        /** Elements are positioned in the center of the left side. */
        LEFT_CENTER,
        /**
         * Elements are positioned on the left, below top-left elements, and flow downwards.
         */
        LEFT_TOP,
        /**
         * Elements are positioned on the right, above bottom-right elements, and flow upwards.
         */
        RIGHT_BOTTOM,
        /** Elements are positioned in the center of the right side. */
        RIGHT_CENTER,
        /** Elements are positioned on the right, below top-right elements, and flow downwards. */
        RIGHT_TOP,
        /**    Elements are positioned in the center of the top row. */
        TOP_CENTER,
        /** Elements are positioned in the top left and flow towards the middle. */
        TOP_LEFT,
        /** Elements are positioned in the top right and flow towards the middle. */
        TOP_RIGHT
    }

    /***** Data *****/
    export class Data extends MVCObject {
        constructor(options?: DataOptions) {
            super();
        };

        add(feature: Data.Feature | FeatureOptions): Data.Feature {
            return new Data.Feature();
        }

        addGeoJson(geoJson: Object, options?: GeoJsonOptions): Data.Feature[] {
            return [];
        }

        contains(feature: Data.Feature): boolean {
            return true;
        }

        forEach(callback: (feature: Data.Feature) => void): void {
        }

        getControlPosition(): ControlPosition {
            return ControlPosition.LEFT_CENTER;
        }

        getControls(): string[] {
            return [];
        }

        getDrawingMode(): string {
            return '';
        }

        getFeatureById(id: number | string): Data.Feature {
            return new Data.Feature();
        }

        getMap(): Map {
            return new Map(document.createElement('div'));
        }

        getStyle(): StylingFunction | StyleOptions {
            return {};
        }

        loadGeoJson(url: string, options?: GeoJsonOptions, callback?: (features: Data.Feature[]) => void): void {
        }

        overrideStyle(feature: Data.Feature, style: StyleOptions): void {
        }

        remove(feature: Data.Feature): void {
        }

        revertStyle(feature?: Data.Feature): void {
        }

        setControlPosition(controlPosition: ControlPosition): void {
        }

        setControls(controls: string[]): void {
        }

        setDrawingMode(drawingMode: string): void {
        }

        setMap(map: Map | null): void {
        }

        setStyle(style: StylingFunction | StyleOptions): void {
        }

        toGeoJson(callback: (feature: Object) => void): void {
        }
    }

    export module Data {

        export class Feature {
            constructor(options?: FeatureOptions) {
            };

            forEachProperty(callback: (value: any, name: string) => void): void {
            }

            getGeometry(): Data.Geometry {
                return new Data.Geometry();
            }

            getId(): number | string {
                return '';
            }

            getProperty(name: string): any {
                return {};
            }

            removeProperty(name: string): void {
            }

            setGeometry(newGeometry: Data.Geometry | LatLng | LatLngLiteral): void {
            }

            setProperty(name: string, newValue: any): void {
            }

            toGeoJson(callback: (feature: Object) => void): void {
            }
        }

        export class Geometry {
            getType(): string {
                return '';
            }
        }

        export class Point extends Data.Geometry {
            constructor(latLng: LatLng | LatLngLiteral) {
                super();
            }

            get(): LatLng {
                return new LatLng(0, 0);
            }
        }

        export class MultiPoint extends Data.Geometry {
            constructor(elements: (LatLng | LatLngLiteral)[]) {
                super();
            }

            getArray(): LatLng[] {
                return [];
            }

            getAt(n: number): LatLng {
                return new LatLng(0, 0);
            }

            getLength(): number {
                return 0;
            }
        }

        export class LineString extends Data.Geometry {
            constructor(elements: (LatLng | LatLngLiteral)[]) {
                super();
            }

            getArray(): LatLng[] {
                return [];
            }

            getAt(n: number): LatLng {
                return new LatLng(0, 0);
            }

            getLength(): number {
                return 0;
            }
        }

        export class MultiLineString extends Data.Geometry {
            constructor(elements: (Data.LineString | (LatLng | LatLngLiteral)[])[]) {
                super();
            }

            getArray(): Data.LineString[] {
                return [];
            }

            getAt(n: number): Data.LineString {
                return new Data.LineString([]);
            }

            getLength(): number {
                return 0;
            }
        }

        export class LinearRing extends Data.Geometry {
            constructor(elements: (LatLng | LatLngLiteral)[]) {
                super();
            }

            getArray(): LatLng[] {
                return [];
            }

            getAt(n: number): LatLng {
                return new LatLng(0, 0);
            }

            getLength(): number {
                return 0;
            }
        }

        export class Polygon extends Data.Geometry {
            constructor(elements: (Data.LinearRing | (LatLng | LatLngLiteral)[])[]) {
                super();
            }

            getArray(): Data.LinearRing[] {
                return [];
            }

            getAt(n: number): Data.LinearRing {
                return new Data.LinearRing([]);
            }

            getLength(): number {
                return 0;
            }
        }

        export class MultiPolygon extends Data.Geometry {
            constructor(elements: (Data.Polygon | (LinearRing | (LatLng | LatLngLiteral)[])[])[]) {
                super();
            }

            getArray(): Data.Polygon[] {
                return [];
            }

            getAt(n: number): Data.Polygon {
                return new Data.Polygon([]);
            }

            getLength(): number {
                return 0;
            }
        }

        export class GeometryCollection extends Data.Geometry {
            constructor(elements: (Data.Geometry[] | LatLng[] | LatLngLiteral)[]) {
                super();
            }

            getArray(): Data.Geometry[] {
                return [];
            }

            getAt(n: number): Data.Geometry {
                return new Data.Geometry();
            }

            getLength(): number {
                return 0;
            }
        }

    }

    /***** Overlays *****/
    export class Marker extends MVCObject {
        static MAX_ZINDEX: number;

        constructor(opts?: MarkerOptions) {
            super();
        }

        getAnimation(): Animation {
            return Animation.DROP;
        }

        getAttribution(): Attribution {
            return {};
        }

        getClickable(): boolean {
            return true;
        }

        getCursor(): string {
            return '';
        }

        getDraggable(): boolean {
            return true;
        }

        getIcon(): string | Icon | Symbol {
            return {};
        }

        getLabel(): MarkerLabel {
            return {};
        }

        getMap(): Map | StreetViewPanorama {
            return new Map(document.createElement('div'));
        }

        getOpacity(): number {
            return 0;
        }

        getPlace(): Place {
            return {};
        }

        getPosition(): LatLng {
            return new LatLng(0, 0);
        }

        getShape(): MarkerShape {
            return {};
        }

        getTitle(): string {
            return '';
        }

        getVisible(): boolean {
            return true;
        }

        getZIndex(): number {
            return 0;
        }

        setAnimation(animation: Animation | null): void {
        }

        setAttribution(attribution: Attribution): void {
        }

        setClickable(flag: boolean): void {
        }

        setCursor(cursor: string): void {
        }

        setDraggable(flag: boolean): void {
        }

        setIcon(icon: string | Icon | Symbol): void {
        }

        setLabel(label: string | MarkerLabel): void {
        }

        setMap(map: Map | StreetViewPanorama | null): void {
        }

        setOpacity(opacity: number): void {
        }

        setOptions(options: MarkerOptions): void {
        }

        setPlace(place: Place): void {
        }

        setPosition(latlng: LatLng | LatLngLiteral): void {
        }

        setShape(shape: MarkerShape): void {
        }

        setTitle(title: string): void {
        }

        setVisible(visible: boolean): void {
        }

        setZIndex(zIndex: number): void {
        }
    }

    /** Built-in symbol paths. */
    export enum SymbolPath {
        /** A backward-pointing closed arrow. */
        BACKWARD_CLOSED_ARROW,
        /** A backward-pointing open arrow. */
        BACKWARD_OPEN_ARROW,
        /** A circle. */
        CIRCLE,
        /** A forward-pointing closed arrow. */
        FORWARD_CLOSED_ARROW,
        /** A forward-pointing open arrow. */
        FORWARD_OPEN_ARROW
    }

    export enum Animation {
        BOUNCE,
        DROP
    }

    /**
     * An overlay that looks like a bubble and is often connected to a marker.
     * This class extends MVCObject.
     */
    export class InfoWindow extends MVCObject {
        /**
         * Creates an info window with the given options. An InfoWindow can be
         * placed on a map at a particular position or above a marker,
         * depending on what is specified in the options. Unless auto-pan is
         * disabled, an InfoWindow will pan the map to make itself visible
         * when it is opened. After constructing an InfoWindow, you must call
         * open to display it on the map. The user can click the close button
         * on the InfoWindow to remove it from the map, or the developer can
         * call close() for the same effect.
         */
        constructor(opts?: InfoWindowOptions) {
            super();
        }

        /** Closes this InfoWindow by removing it from the DOM structure. */
        close(): void {
        }

        getContent(): string | Element {
            return '';
        }

        getPosition(): LatLng {
            return new LatLng(0, 0);
        }

        getZIndex(): number {
            return 0;
        }

        /**
         * Opens this InfoWindow on the given map. Optionally, an InfoWindow can be associated with an anchor.
         * In the core API, the only anchor is the Marker class.
         * However, an anchor can be any MVCObject that exposes a LatLng position property and optionally
         * a Point anchorPoint property for calculating the pixelOffset (see InfoWindowOptions).
         * The anchorPoint is the offset from the anchor's position to the tip of the InfoWindow.
         */
        open(map?: Map | StreetViewPanorama, anchor?: MVCObject): void {
        }

        setContent(content: string | Node): void {
        }

        setOptions(options: InfoWindowOptions): void {
        }

        setPosition(position: LatLng | LatLngLiteral): void {
        }

        setZIndex(zIndex: number): void {
        }
    }


    export class Polyline extends MVCObject {
        constructor(opts?: PolylineOptions) {
            super();
        }

        getDraggable(): boolean {
            return true;
        }

        getEditable(): boolean {
            return true;
        }

        getMap(): Map {
            return new Map(document.createElement('div'));
        }

        getPath(): MVCArray<LatLng> {
            return new MVCArray<LatLng>();
        }

        getVisible(): boolean {
            return true;
        }

        setDraggable(draggable: boolean): void {
        }

        setEditable(editable: boolean): void {
        }

        setMap(map: Map | null): void {
        }

        setOptions(options: PolylineOptions): void {
        }

        setPath(path: MVCArray<LatLng> | LatLng[] | LatLngLiteral[]): void {
        }

        setVisible(visible: boolean): void {
        }
    }

    export class Polygon extends MVCObject {
        constructor(opts?: PolygonOptions) {
            super();
        }

        getDraggable(): boolean {
            return true;
        }

        getEditable(): boolean {
            return true;
        }

        getMap(): Map {
            return new Map(document.createElement('div'));
        }

        /** Retrieves the first path. */
        getPath(): MVCArray<LatLng> {
            return new MVCArray<LatLng>();
        }

        /** Retrieves the paths for this polygon. */
        getPaths(): MVCArray<MVCArray<LatLng>> {
            return new MVCArray<MVCArray<LatLng>>();
        }

        getVisible(): boolean {
            return true;
        }

        setDraggable(draggable: boolean): void {
        }

        setEditable(editable: boolean): void {
        }

        setMap(map: Map | null): void {
        }

        setOptions(options: PolygonOptions): void {
        }

        setPath(path: MVCArray<LatLng> | LatLng[] | LatLngLiteral[]): void {
        }

        setPaths(paths: MVCArray<MVCArray<LatLng>> | MVCArray<LatLng> | LatLng[][] | LatLngLiteral[][] | LatLng[] | LatLngLiteral[]): void {
        }

        setVisible(visible: boolean): void {
        }
    }

    export class Rectangle extends MVCObject {
        constructor(opts?: RectangleOptions) {
            super();
        }

        getBounds(): LatLngBounds {
            return new LatLngBounds();
        }

        getDraggable(): boolean {
            return true;
        }

        getEditable(): boolean {
            return true;
        }

        getMap(): Map {
            return new Map(document.createElement('div'));
        }

        getVisible(): boolean {
            return true;
        }

        setBounds(bounds: LatLngBounds | LatLngBoundsLiteral): void {
        }

        setDraggable(draggable: boolean): void {
        }

        setEditable(editable: boolean): void {
        }

        setMap(map: Map | null): void {
        }

        setOptions(options: RectangleOptions): void {
        }

        setVisible(visible: boolean): void {
        }
    }


    /** A circle on the Earth's surface; also known as a "spherical cap". */
    export class Circle extends MVCObject {
        /** Create a circle using the passed CircleOptions, which specify the center, radius, and style. */
        constructor(opts?: CircleOptions) {
            super();
        }

        /** Gets the LatLngBounds of this Circle. */
        getBounds(): LatLngBounds {
            return new LatLngBounds();
        }

        /** Returns the center of this circle. */
        getCenter(): LatLng {
            return new LatLng(0, 0);
        }

        /** Returns whether this circle can be dragged by the user. */
        getDraggable(): boolean {
            return true;
        }

        /** Returns whether this circle can be edited by the user. */
        getEditable(): boolean {
            return true;
        }

        /** Returns the map on which this circle is displayed. */
        getMap(): Map {
            return new Map(document.createElement('div'));
        }

        /** Returns the radius of this circle (in meters). */
        getRadius(): number {
            return 0;
        }

        /** Returns whether this circle is visible on the map. */
        getVisible(): boolean {
            return true;
        }

        /** Sets the center of this circle. */
        setCenter(center: LatLng | LatLngLiteral): void {
        }

        /** If set to true, the user can drag this circle over the map. */
        setDraggable(draggable: boolean): void {
        }

        /**
         * If set to true, the user can edit this circle by dragging the control points shown at the center and around
         * the circumference of the circle.
         */
        setEditable(editable: boolean): void {
        }

        /** Renders the circle on the specified map. If map is set to null, the circle will be removed. */
        setMap(map: Map | null): void {
        }

        setOptions(options: CircleOptions): void {
        }

        /** Sets the radius of this circle (in meters). */
        setRadius(radius: number): void {
        }

        /** Hides this circle if set to false. */
        setVisible(visible: boolean): void {
        }
    }


    /**
     * The possible positions of the stroke on a polygon.
     */
    export enum StrokePosition {
        /**
         * The stroke is centered on the polygon's path, with half the stroke inside
         * the polygon and half the stroke outside the polygon.
         */
        CENTER,
        /** The stroke lies inside the polygon. */
        INSIDE,
        /** The stroke lies outside the polygon. */
        OUTSIDE
    }

    export class GroundOverlay extends MVCObject {
        constructor(url: string, bounds: LatLngBounds | LatLngBoundsLiteral, opts?: GroundOverlayOptions) {
            super()
        }

        getBounds(): LatLngBounds {
            return new LatLngBounds();
        }

        getMap(): Map {
            return new Map(document.createElement('div'));
        }

        getOpacity(): number {
            return 0;
        }

        getUrl(): string {
            return '';
        }

        setMap(map: Map | null): void {
        }

        setOpacity(opacity: number): void {
        }
    }


    export class OverlayView extends MVCObject {
        draw(): void {
        }

        getMap(): Map | StreetViewPanorama {
            return new Map(document.createElement('div'))
        }

        getPanes(): MapPanes {
            return {
                floatPane: document.createElement('div'),
                floatShadow: document.createElement('div'),
                mapPane: document.createElement('div'),
                markerLayer: document.createElement('div'),
                overlayImage: document.createElement('div'),
                overlayLayer: document.createElement('div'),
                overlayMouseTarget: document.createElement('div'),
                overlayShadow: document.createElement('div'),
            };
        }

        getProjection(): MapCanvasProjection {
            return new MapCanvasProjection();
        }

        onAdd(): void {
        }

        onRemove(): void {
        }

        setMap(map: Map | StreetViewPanorama | null): void {
        }
    }


    export class MapCanvasProjection extends MVCObject {
        fromContainerPixelToLatLng(pixel: Point, nowrap?: boolean): LatLng {
            return new LatLng(0, 0);
        }

        fromDivPixelToLatLng(pixel: Point, nowrap?: boolean): LatLng {
            return new LatLng(0, 0);
        }

        fromLatLngToContainerPixel(latLng: LatLng): Point {
            return new Point(0, 0);
        }

        fromLatLngToDivPixel(latLng: LatLng): Point {
            return new Point(0, 0);
        }

        getWorldWidth(): number {
            return 0;
        }
    }

    /***** Services *****/
    export class Geocoder {
        geocode(request: GeocoderRequest, callback: (results: GeocoderResult[], status: GeocoderStatus) => void): void {
        }
    }


    export enum GeocoderStatus {
        ERROR,
        INVALID_REQUEST,
        OK,
        OVER_QUERY_LIMIT,
        REQUEST_DENIED,
        UNKNOWN_ERROR,
        ZERO_RESULTS
    }


    export enum GeocoderLocationType {
        APPROXIMATE,
        GEOMETRIC_CENTER,
        RANGE_INTERPOLATED,
        ROOFTOP
    }

    export class DirectionsRenderer extends MVCObject {
        constructor(opts?: DirectionsRendererOptions) {
            super()
        }

        getDirections(): DirectionsResult {
            return {
                geocoded_waypoints: [],
                routes: [],
            };
        }

        getMap(): Map {
            return new Map(document.createElement('div'));
        }

        getPanel(): Element {
            return document.createElement('div');
        }

        getRouteIndex(): number {
            return 0;
        }

        setDirections(directions: DirectionsResult): void {
        }

        setMap(map: Map | null): void {
        }

        setOptions(options: DirectionsRendererOptions): void {
        }

        setPanel(panel: Element): void {
        }

        setRouteIndex(routeIndex: number): void {
        }
    }


    export class DirectionsService {
        route(request: DirectionsRequest, callback: (result: DirectionsResult, status: DirectionsStatus) => void): void {
        }
    }

    /** A directions query to be sent to the DirectionsService. */


    export enum TravelMode {
        BICYCLING,
        DRIVING,
        TRANSIT,
        WALKING
    }

    export enum UnitSystem {
        IMPERIAL,
        METRIC
    }


    export enum TransitMode {
        BUS,
        RAIL,
        SUBWAY,
        TRAIN,
        TRAM
    }

    export enum TransitRoutePreference {
        FEWER_TRANSFERS,
        LESS_WALKING
    }


    export enum TrafficModel {
        BEST_GUESS,
        OPTIMISTIC,
        PESSIMISTIC
    }

    /**
     * A DirectionsWaypoint represents a location between origin and destination
     * through which the trip should be routed.
     */


    export enum DirectionsStatus {
        INVALID_REQUEST,
        MAX_WAYPOINTS_EXCEEDED,
        NOT_FOUND,
        OK,
        OVER_QUERY_LIMIT,
        REQUEST_DENIED,
        UNKNOWN_ERROR,
        ZERO_RESULTS
    }

    export enum VehicleType {
        BUS,
        CABLE_CAR,
        COMMUTER_TRAIN,
        FERRY,
        FUNICULAR,
        GONDOLA_LIFT,
        HEAVY_RAIL,
        HIGH_SPEED_TRAIN,
        INTERCITY_BUS,
        METRO_RAIL,
        MONORAIL,
        OTHER,
        RAIL,
        SHARE_TAXI,
        SUBWAY,
        TRAM,
        TROLLEYBUS
    }

    export class ElevationService {
        getElevationAlongPath(request: PathElevationRequest, callback: (results: ElevationResult[], status: ElevationStatus) => void): void {
        }

        getElevationForLocations(request: LocationElevationRequest, callback: (results: ElevationResult[], status: ElevationStatus) => void): void {
        }
    }

    export enum ElevationStatus {
        INVALID_REQUEST,
        OK,
        OVER_QUERY_LIMIT,
        REQUEST_DENIED,
        UNKNOWN_ERROR
    }

    export class MaxZoomService {
        getMaxZoomAtLatLng(latlng: LatLng | LatLngLiteral, callback: (result: MaxZoomResult) => void): void {
        }
    }

    export enum MaxZoomStatus {
        ERROR,
        OK
    }

    export class DistanceMatrixService {
        getDistanceMatrix(request: DistanceMatrixRequest, callback: (response: DistanceMatrixResponse, status: DistanceMatrixStatus) => void): void {
        }
    }


    export enum DistanceMatrixStatus {
        INVALID_REQUEST,
        MAX_DIMENSIONS_EXCEEDED,
        MAX_ELEMENTS_EXCEEDED,
        OK,
        OVER_QUERY_LIMIT,
        REQUEST_DENIED,
        UNKNOWN_ERROR
    }

    export enum DistanceMatrixElementStatus {
        NOT_FOUND,
        OK,
        ZERO_RESULTS
    }

    /***** Save to Google Maps *****/


    export class SaveWidget {
        constructor(container: Node, opts?: SaveWidgetOptions) {
        }

        getAttribution(): Attribution {
            return {};
        }

        getPlace(): Place {
            return {};
        }

        setAttribution(attribution: Attribution): void {
        }

        setOptions(opts: SaveWidgetOptions): void {
        }

        setPlace(place: Place): void {
        }
    }

    /***** Map Types *****/

    export class MapTypeRegistry extends MVCObject {
        constructor() {
            super()
        }

        set(id: string, mapType: MapType): void {
        }
    }

    export class ImageMapType extends MVCObject implements MapType {
        constructor(opts: ImageMapTypeOptions) {
            super()
        }

        getOpacity(): number {
            return 0;
        }

        getTile(tileCoord: Point, zoom: number, ownerDocument: Document): Element {
            return document.createElement('div');
        }

        releaseTile(tile: Element): void {
        }

        setOpacity(opacity: number): void {
        }
    }

    export class StyledMapType extends MVCObject implements MapType {
        constructor(styles: MapTypeStyle[], options?: StyledMapTypeOptions) {
            super()
        }

        getTile(tileCoord: Point, zoom: number, ownerDocument: Document): Element {
            return document.createElement('div');
        }

        releaseTile(tile: Element): void {
        }
    }


    /***** Layers *****/
    export class BicyclingLayer extends MVCObject {
        constructor() {
            super()
        }

        getMap(): Map {
            return new Map(document.createElement('div'));
        }

        setMap(map: Map | null): void {
        }
    }

    export class FusionTablesLayer extends MVCObject {
        constructor(options: FusionTablesLayerOptions) {
            super()
        }

        getMap(): Map {
            return new Map(document.createElement('div'));
        }

        setMap(map: Map | null): void {
        }

        setOptions(options: FusionTablesLayerOptions): void {
        }
    }

    export class KmlLayer extends MVCObject {
        constructor(opts?: KmlLayerOptions) {
            super()
        }

        getDefaultViewport(): LatLngBounds {
            return new LatLngBounds();
        }

        getMap(): Map {
            return new Map(document.createElement('div'));
        }

        getMetadata(): KmlLayerMetadata {
            return {
                author: {
                    email: '',
                    name: '',
                    uri: '',
                },
                description: '',
                hasScreenOverlays: true,
                name: '',
                snippet: '',
            };
        }

        getStatus(): KmlLayerStatus {
            return KmlLayerStatus.OK;
        }

        getUrl(): string {
            return '';
        }

        getZIndex(): number {
            return 0;
        }

        setMap(map: Map | null): void {
        }

        setUrl(url: string): void {
        }

        setZIndez(zIndex: number): void {
        }
    }

    export enum KmlLayerStatus {
        DOCUMENT_NOT_FOUND,
        DOCUMENT_TOO_LARGE,
        FETCH_ERROR,
        INVALID_DOCUMENT,
        INVALID_REQUEST,
        LIMITS_EXCEEDED,
        OK,
        TIMED_OUT,
        UNKNOWN
    }

    export class TrafficLayer extends MVCObject {
        constructor(opts?: TrafficLayerOptions) {
            super()
        }

        getMap(): Map {
            return new Map(document.createElement('div'));
        }

        setMap(map: Map | null): void {
        }

        setOptions(options: TrafficLayerOptions): void {
        }
    }

    export class TransitLayer extends MVCObject {
        constructor() {
            super()
        }

        getMap(): void {
        }

        setMap(map: Map | null): void {
        }
    }

    /***** Street View *****/
    export class StreetViewPanorama {
        constructor(container: Element, opts?: StreetViewPanoramaOptions) {
        }

        controls: MVCArray<Node>[];

        getLinks(): StreetViewLink[] {
            return [];
        }

        getLocation(): StreetViewLocation {
            return {};
        }

        getMotionTracking(): boolean {
            return true;
        }

        getPano(): string {
            return '';
        }

        getPhotographerPov(): StreetViewPov {
            return {};
        }

        getPosition(): LatLng {
            return new LatLng(0, 0);
        }

        getPov(): StreetViewPov {
            return {};
        }

        getStatus(): StreetViewStatus {
            return StreetViewStatus.OK;
        }

        getVisible(): boolean {
            return true;
        }

        getZoom(): number {
            return 0;
        }

        registerPanoProvider(provider: (input: string) => StreetViewPanoramaData): void {
        }

        setLinks(links: Array<StreetViewLink>): void {
        }

        setMotionTracking(motionTracking: boolean): void {
        }

        setOptions(options: StreetViewPanoramaOptions): void {
        }

        setPano(pano: string): void {
        }

        setPosition(latLng: LatLng | LatLngLiteral): void {
        }

        setPov(pov: StreetViewPov): void {
        }

        setVisible(flag: boolean): void {
        }

        setZoom(zoom: number): void {
        }
    }

    export enum StreetViewPreference {
        BEST,
        NEAREST
    }

    export enum StreetViewSource {
        DEFAULT,
        OUTDOOR
    }

    export class StreetViewService {
        getPanorama(request: StreetViewLocationRequest | StreetViewPanoRequest, cb: (data: StreetViewPanoramaData, status: StreetViewStatus) => void): void {
        }

        getPanoramaById(pano: string, callback: (streetViewPanoramaData: StreetViewPanoramaData, streetViewStatus: StreetViewStatus) => void): void {
        }

        getPanoramaByLocation(latlng: LatLng | LatLngLiteral, radius: number, callback: (streetViewPanoramaData: StreetViewPanoramaData, streetViewStatus: StreetViewStatus) => void): void {
        }
    }

    export enum StreetViewStatus {
        OK,
        UNKNOWN_ERROR,
        ZERO_RESULTS
    }

    export class StreetViewCoverageLayer extends MVCObject {
        getMap(): Map {
            return new Map(document.createElement('div'));
        }

        setMap(map: Map | null): void {
        }
    }

    export class event {
        /**
         * Cross browser event handler registration. This listener is removed by calling
         * removeListener(handle) for the handle that is returned by this function.
         */
        static addDomListener(instance: Object, eventName: string, handler: Function, capture?: boolean): MapsEventListener {
            return {
                remove() {
                }
            };
        }

        /**
         * Wrapper around addDomListener that removes the listener after the first event.
         */
        static addDomListenerOnce(instance: Object, eventName: string, handler: Function, capture?: boolean): MapsEventListener {
            return {
                remove() {
                }
            };
        }

        /**
         * Adds the given listener function to the given event name for the given object
         * instance. Returns an identifier for this listener that can be used with
         * removeListener().
         */
        static addListener(instance: Object, eventName: string, handler: Function): MapsEventListener {
            return {
                remove() {
                }
            };
        }

        /**
         * Like addListener, but the handler removes itself after handling the first event.
         */
        static addListenerOnce(instance: Object, eventName: string, handler: Function): MapsEventListener {
            return {
                remove() {
                }
            };
        }

        /**
         * Removes all listeners for all events for the given instance.
         */
        static clearInstanceListeners(instance: Object): void {
        }

        /**
         * Removes all listeners for the given event for the given instance.
         */
        static clearListeners(instance: Object, eventName: string): void {
        }

        /**
         * Removes the given listener, which should have been returned by addListener above.
         * Equivalent to calling listener.remove().
         */
        static removeListener(listener: MapsEventListener): void {
        }

        /**
         * Triggers the given event. All arguments after eventName are passed as arguments to
         * the listeners.
         */
        static trigger(instance: any, eventName: string, ...args: any[]): void {
        }
    }

    /* **** Base **** */

    /**
     * A LatLng is a point in geographical coordinates: latitude and longitude.
     *
     * * Latitude ranges between -90 and 90 degrees, inclusive. Values above or
     *   below this range will be clamped to the range [-90, 90]. This means
     *   that if the value specified is less than -90, it will be set to -90.
     *   And if the value is greater than 90, it will be set to 90.
     * * Longitude ranges between -180 and 180 degrees, inclusive. Values above
     *   or below this range will be wrapped so that they fall within the
     *   range. For example, a value of -190 will be converted to 170. A value
     *   of 190 will be converted to -170. This reflects the fact that
     *   longitudes wrap around the globe.
     *
     * Although the default map projection associates longitude with the
     * x-coordinate of the map, and latitude with the y-coordinate, the
     * latitude coordinate is always written first, followed by the longitude.
     * Notice that you cannot modify the coordinates of a LatLng. If you want
     * to compute another point, you have to create a new one.
     */
    export class LatLng {
        /**
         * Creates a LatLng object representing a geographic point.
         * Note the ordering of latitude and longitude.
         * @param lat Latitude is specified in degrees within the range [-90, 90].
         * @param lng Longitude is specified in degrees within the range [-180, 180].
         * @param noWrap Set noWrap to true to enable values outside of this range.
         */
        constructor(lat: number, lng: number, noWrap?: boolean) {
        }

        /** Comparison function. */
        equals(other: LatLng): boolean {
            return true;
        }

        /** Returns the latitude in degrees. */
        lat(): number {
            return 0;
        }

        /** Returns the longitude in degrees. */
        lng(): number {
            return 0;
        }

        /** Converts to string representation. */
        toString(): string {
            return '';
        }

        /** Returns a string of the form "lat,lng". We round the lat/lng values to 6 decimal places by default. */
        toUrlValue(precision?: number): string {
            return '';
        }

        /** Converts to JSON representation. This function is intended to be used via JSON.stringify. */
        toJSON(): LatLngLiteral {
            return {lat: 0, lng: 0};
        }
    }

    /**
     * A LatLngBounds instance represents a rectangle in geographical coordinates, including one
     * that crosses the 180 degrees longitudinal meridian.
     */
    export class LatLngBounds {
        /** Constructs a rectangle from the points at its south-west and north-east corners. */
        constructor(sw?: LatLng | LatLngLiteral, ne?: LatLng | LatLngLiteral) {
        }

        /** Returns true if the given lat/lng is in this bounds. */
        contains(latLng: LatLng | LatLngLiteral): boolean {
            return true;
        }

        /** Returns true if this bounds approximately equals the given bounds. */
        equals(other: LatLngBounds | LatLngBoundsLiteral): boolean {
            return true;
        }

        /** Extends this bounds to contain the given point. */
        extend(point: LatLng | LatLngLiteral): LatLngBounds {
            return new LatLngBounds();
        }

        /** Computes the center of this LatLngBounds */
        getCenter(): LatLng {
            return new LatLng(0, 0);
        }

        /** Returns the north-east corner of this bounds. */
        getNorthEast(): LatLng {
            return new LatLng(0, 0);
        }

        /** Returns the south-west corner of this bounds. */
        getSouthWest(): LatLng {
            return new LatLng(0, 0);
        }

        /** Returns true if this bounds shares any points with the other bounds. */
        intersects(other: LatLngBounds | LatLngBoundsLiteral): boolean {
            return true;
        }

        /** Returns if the bounds are empty. */
        isEmpty(): boolean {
            return true;
        }

        /** Converts to JSON representation. This function is intended to be used via JSON.stringify. */
        toJSON(): LatLngBoundsLiteral {
            return { east: 0, north: 0, south: 0, west: 0 };
        }

        /** Converts the given map bounds to a lat/lng span. */
        toSpan(): LatLng {
            return new LatLng(0, 0);
        }

        /** Converts to string. */
        toString(): string {
            return '';
        }

        /**
         * Returns a string of the form "lat_lo,lng_lo,lat_hi,lng_hi" for this bounds, where "lo" corresponds to the
         * southwest corner of the bounding box, while "hi" corresponds to the northeast corner of that box.
         */
        toUrlValue(precision?: number): string {
            return '';
        }

        /** Extends this bounds to contain the union of this and the given bounds. */
        union(other: LatLngBounds | LatLngBoundsLiteral): LatLngBounds {
            return new LatLngBounds();
        }
    }

    export class Point {
        /** A point on a two-dimensional plane. */
        constructor(x: number, y: number) {
        }

        /** The X coordinate */
        x: number;
        /** The Y coordinate */
        y: number;

        /** Compares two Points */
        equals(other: Point): boolean {
            return true;
        }

        /** Returns a string representation of this Point. */
        toString(): string {
            return '';
        }
    }

    export class Size {
        constructor(width: number, height: number, widthUnit?: string, heightUnit?: string) {
        }

        height: number;
        width: number;

        equals(other: Size): boolean {
            return true;
        }

        toString(): string {
            return '';
        }
    }

    /***** Geometry Library *****/
    export module geometry {
        export class encoding {
            static decodePath(encodedPath: string): LatLng[] {
                return []
            }

            static encodePath(path: LatLng[] | MVCArray<LatLng>): string {
                return '';
            }
        }

        /**
         * Utility functions for computing geodesic angles, distances and areas.
         * The default radius is Earth's radius of 6378137 meters.
         */
        export class spherical {
            /**
             * Returns the area of a closed path.
             * The computed area uses the same units as the radius.
             * The radius defaults to the Earth's radius in meters,
             * in which case the area is in square meters.
             */
            static computeArea(path: LatLng[] | MVCArray<LatLng>, radius?: number): number {
                return 0;
            }

            /**
             * Returns the distance, in meters, between two LatLngs.
             * You can optionally specify a custom radius.
             * The radius defaults to the radius of the Earth.
             */
            static computeDistanceBetween(from: LatLng, to: LatLng, radius?: number): number {
                return 0;
            }

            /**
             * Returns the heading from one LatLng to another LatLng.
             * Headings are expressed in degrees clockwise from North within the range [-180,180).
             */
            static computeHeading(from: LatLng, to: LatLng): number {
                return 0;
            }

            /**
             * Returns the length of the given path.
             */
            static computeLength(path: LatLng[] | MVCArray<LatLng>, radius?: number): number {
                return 0;
            }

            /**
             * Returns the LatLng resulting from moving a distance from an origin in the
             * specified heading (expressed in degrees clockwise from north).
             */
            static computeOffset(from: LatLng, distance: number, heading: number, radius?: number): LatLng {
                return new LatLng(0, 0);
            }

            /**
             * Returns the location of origin when provided with a LatLng destination, meters
             * travelled and original heading. Headings are expressed in degrees clockwise from
             * North. This function returns null when no solution is available.
             */
            static computeOffsetOrigin(to: LatLng, distance: number, heading: number, radius?: number): LatLng {
                return new LatLng(0, 0);
            }

            /**
             * Returns the signed area of a closed path. The signed area may be used to determine
             * the orientation of the path. The computed area uses the same units as the radius.
             * The radius defaults to the Earth's radius in meters, in which case the area is in
             * square meters.
             */
            static computeSignedArea(loop: LatLng[] | MVCArray<LatLng>, radius?: number): number {
                return 0;
            }

            /**
             * Returns the LatLng which lies the given fraction of the way between the origin
             * LatLng and the destination LatLng.
             */
            static interpolate(from: LatLng, to: LatLng, fraction: number): LatLng {
                return new LatLng(0, 0);
            }
        }

        export class poly {
            static containsLocation(point: LatLng, polygon: Polygon): boolean {
                return true;
            }

            static isLocationOnEdge(point: LatLng, poly: Polygon | Polyline, tolerance?: number): boolean {
                return true;
            }
        }
    }

    /***** AdSense Library *****/
    export module adsense {
        import AdUnitOptions = google.maps.adsense.AdUnitOptions;

        export class AdUnit extends MVCObject {
            constructor(container: Element, opts: AdUnitOptions) {
                super();
            };

            getBackgroundColor(): string {
                return '';
            }

            getBorderColor(): string {
                return '';
            }

            getChannelNumber(): string {
                return '';
            }

            getContainer(): Element {
                return document.createElement('div');
            }

            getFormat(): AdFormat {
                return AdFormat.BANNER;
            }

            getMap(): Map {
                return new Map(document.createElement('div'));
            }

            getPosition(): ControlPosition {
                return ControlPosition.LEFT_CENTER;
            }

            getPublisherId(): string {
                return '';
            }

            getTextColor(): string {
                return '';
            }

            getTitleColor(): string {
                return '';
            }

            getUrlColor(): string {
                return '';
            }

            setBackgroundColor(backgroundColor: string): void {
            }

            setBorderColor(borderColor: string): void {
            }

            setChannelNumber(channelNumber: string): void {
            }

            setFormat(format: AdFormat): void {
            }

            setMap(map: Map | null): void {
            }

            setPosition(position: ControlPosition): void {
            }

            setTextColor(textColor: string): void {
            }

            setTitleColor(titleColor: string): void {
            }

            setUrlColor(urlColor: string): void {
            }
        }

        export enum AdFormat {
            BANNER,
            BUTTON,
            HALF_BANNER,
            LARGE_HORIZONTAL_LINK_UNIT,
            LARGE_RECTANGLE,
            LARGE_VERTICAL_LINK_UNIT,
            LEADERBOARD,
            MEDIUM_RECTANGLE,
            MEDIUM_VERTICAL_LINK_UNIT,
            SKYSCRAPER,
            SMALL_HORIZONTAL_LINK_UNIT,
            SMALL_RECTANGLE,
            SMALL_SQUARE,
            SMALL_VERTICAL_LINK_UNIT,
            SQUARE,
            VERTICAL_BANNER,
            WIDE_SKYSCRAPER,
            X_LARGE_VERTICAL_LINK_UNIT
        }
    }

    /***** Places Library *****/
    export module places {
        import AutocompleteOptions = google.maps.places.AutocompleteOptions;
        import PlaceResult = google.maps.places.PlaceResult;
        import ComponentRestrictions = google.maps.places.ComponentRestrictions;
        import AutocompletionRequest = google.maps.places.AutocompletionRequest;
        import AutocompletePrediction = google.maps.places.AutocompletePrediction;
        import QueryAutocompletionRequest = google.maps.places.QueryAutocompletionRequest;
        import QueryAutocompletePrediction = google.maps.places.QueryAutocompletePrediction;
        import PlaceDetailsRequest = google.maps.places.PlaceDetailsRequest;
        import PlaceSearchRequest = google.maps.places.PlaceSearchRequest;
        import PlaceSearchPagination = google.maps.places.PlaceSearchPagination;
        import RadarSearchRequest = google.maps.places.RadarSearchRequest;
        import TextSearchRequest = google.maps.places.TextSearchRequest;
        import SearchBoxOptions = google.maps.places.SearchBoxOptions;

        export class Autocomplete extends MVCObject {
            constructor(inputField: HTMLInputElement, opts?: AutocompleteOptions) {
                super()
            }

            getBounds(): LatLngBounds {
                return new LatLngBounds();
            }

            getPlace(): PlaceResult {
                return {
                    address_components: [],
                    aspects: [], /* Deprecated. Will be removed May 2, 2017 */
                    formatted_address: '',
                    formatted_phone_number: '',
                    geometry: {
                        location: new LatLng(0, 0),
                        viewport: new LatLngBounds(),
                    },
                    html_attributions: [],
                    icon: '',
                    international_phone_number: '',
                    name: '',
                    opening_hours: {
                        open_now: true,
                        periods: [],
                        weekday_text: [],
                    },
                    permanently_closed: true,
                    photos: [],
                    place_id: '',
                    price_level: 0,
                    rating: 0,
                    reviews: [],
                    types: [],
                    url: '',
                    vicinity: '',
                    website: '',
                };
            }

            setBounds(bounds: LatLngBounds | LatLngBoundsLiteral): void {
            }

            setComponentRestrictions(restrictions: ComponentRestrictions): void {
            }

            setTypes(types: string[]): void {
            }
        }


        export class AutocompleteService {
            constructor() {
            }

            getPlacePredictions(request: AutocompletionRequest, callback: (result: AutocompletePrediction[], status: PlacesServiceStatus) => void): void {
            }

            getQueryPredictions(request: QueryAutocompletionRequest, callback: (result: QueryAutocompletePrediction[], status: PlacesServiceStatus) => void): void {
            }
        }


        export class PlacesService {
            constructor(attrContainer: HTMLDivElement | Map) {
            }

            getDetails(request: PlaceDetailsRequest, callback: (result: PlaceResult, status: PlacesServiceStatus) => void): void {
            }

            nearbySearch(request: PlaceSearchRequest, callback: (results: PlaceResult[], status: PlacesServiceStatus, pagination: PlaceSearchPagination) => void): void {
            }

            radarSearch(request: RadarSearchRequest, callback: (results: PlaceResult[], status: PlacesServiceStatus) => void): void {
            }

            textSearch(request: TextSearchRequest, callback: (results: PlaceResult[], status: PlacesServiceStatus) => void): void {
            }
        }

        export enum PlacesServiceStatus {
            INVALID_REQUEST,
            OK,
            OVER_QUERY_LIMIT,
            REQUEST_DENIED,
            UNKNOWN_ERROR,
            ZERO_RESULTS
        }


        export enum RankBy {
            DISTANCE,
            PROMINENCE
        }

        export class SearchBox extends MVCObject {
            constructor(inputField: HTMLInputElement, opts?: SearchBoxOptions) {
                super()
            }

            getBounds(): LatLngBounds {
                return new LatLngBounds();
            }

            getPlaces(): PlaceResult[] {
                return [];
            }

            setBounds(bounds: LatLngBounds | LatLngBoundsLiteral): void {
            }
        }

    }

    /***** Drawing Library *****/
    export module drawing {
        import DrawingManagerOptions = google.maps.drawing.DrawingManagerOptions;

        export class DrawingManager extends MVCObject {
            constructor(options?: DrawingManagerOptions) {
                super()
            }

            getDrawingMode(): OverlayType {
                return OverlayType.RECTANGLE;
            }

            getMap(): Map {
                return new Map(document.createElement('div'));
            }

            setDrawingMode(drawingMode: OverlayType): void {
            }

            setMap(map: Map | null): void {
            }

            setOptions(options: DrawingManagerOptions): void {
            }
        }


        /**
         * The types of overlay that may be created by the DrawingManager. Specify these by value, or by using the
         * constant's name. For example, 'polygon' or google.maps.drawing.OverlayType.POLYGON.
         */
        export enum OverlayType {
            /**
             * Specifies that the DrawingManager creates circles, and that the overlay given in the overlaycomplete
             * event is a circle.
             */
            CIRCLE,
            /**
             * Specifies that the DrawingManager creates markers, and that the overlay given in the overlaycomplete
             * event is a marker.
             */
            MARKER,
            /**
             * Specifies that the DrawingManager creates polygons, and that the overlay given in the overlaycomplete
             * event is a polygon.
             */
            POLYGON,
            /**
             * Specifies that the DrawingManager creates polylines, and that the overlay given in the overlaycomplete
             * event is a polyline.
             */
            POLYLINE,
            /**
             * Specifies that the DrawingManager creates rectangles, and that the overlay given in the overlaycomplete
             * event is a rectangle.
             */
            RECTANGLE
        }
    }

    /***** Visualization Library *****/
    export module visualization {
        import MapsEngineLayerOptions = google.maps.visualization.MapsEngineLayerOptions;
        import MapsEngineLayerProperties = google.maps.visualization.MapsEngineLayerProperties;
        import HeatmapLayerOptions = google.maps.visualization.HeatmapLayerOptions;
        import WeightedLocation = google.maps.visualization.WeightedLocation;

        export class MapsEngineLayer extends MVCObject {
            constructor(options: MapsEngineLayerOptions) {
                super()
            }

            getLayerId(): string {
                return '';
            }

            getLayerKey(): string {
                return '';
            }

            getMap(): Map {
                return new Map(document.createElement('div'));
            }

            getMapId(): string {
                return '';
            }

            getOpacity(): number {
                return 0;
            }

            getProperties(): MapsEngineLayerProperties {
                return {name: ''};
            }

            getStatus(): MapsEngineStatus {
                return MapsEngineStatus.OK;
            }

            getZIndex(): number {
                return 0;
            }

            setLayerId(layerId: string): void {
            }

            setLayerKey(layerKey: string): void {
            }

            setMap(map: Map | null): void {
            }

            setMapId(mapId: string): void {
            }

            setOpacity(opacity: number): void {
            }

            setOptions(options: MapsEngineLayerOptions): void {
            }

            setZIndex(zIndex: number): void {
            }
        }


        export enum MapsEngineStatus {
            INVALID_LAYER,
            OK,
            UNKNOWN_ERROR
        }

        export class HeatmapLayer extends MVCObject {
            constructor(opts?: HeatmapLayerOptions) {
                super()
            }

            getData<T extends LatLng | WeightedLocation>(): MVCArray<T> {
                return new MVCArray<any>()
            }

            getMap(): Map {
                return new Map(document.createElement('div'));
            }

            setData(data: MVCArray<LatLng | WeightedLocation> | LatLng[] | WeightedLocation[]): void {
            }

            setMap(map: Map | null): void {
            }
        }


        export class MouseEvent {
            stop(): void {
            }
        }

        export class MapsEventListener {

        }
    }

}

export const google = {
    maps: tmp
};
