/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue'
import { MglMap, MglMarker, MglPopup } from 'vue-mapbox'
import MglGeocoderControl from 'vue-mapbox-geocoder'
import Mapbox from 'mapbox-gl'

Vue.component('MglMap', MglMap)
Vue.component('MglMarker', MglMarker)
Vue.component('MglPopup', MglPopup)
Vue.component('MglGeocoderControl', MglGeocoderControl)

Vue.prototype.$mapbox = Mapbox
