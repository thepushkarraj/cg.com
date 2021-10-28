import Vue from 'vue'
// import VueMapbox from 'vue-mapbox'
// import Mapbox from 'mapbox-gl'
/** form */
import Email from '~/components/elements/form/Email.vue'
import Mobile from '~/components/elements/form/Mobile.vue'
import Password from '~/components/elements/form/Password.vue'
import TextInput from '~/components/elements/form/TextInput.vue'
import NumberInput from '~/components/elements/form/NumberInput.vue'
import DatePicker from '~/components/elements/form/DatePicker.vue'
import DatePickerRange from '~/components/elements/form/DatePickerRange.vue'
import Checkbox from '~/components/elements/form/Checkbox.vue'
import CityList from '~/components/main/CityList.vue'
import TextEditor from '~/components/elements/form/TextEditor.vue'
import ImageInput from '~/components/elements/form/ImageInput.vue'
import ImageGalleryInput from '~/components/elements/form/ImageGalleryInput.vue'
import FormLayout from '~/components/elements/form/FormLayout.vue'
import SelectInput from '~/components/elements/form/SelectInput.vue'
import SelectInputMulti from '~/components/elements/form/SelectInputMulti.vue'
import ConfirmPassword from '~/components/elements/form/ConfirmPassword.vue'
import MultiLangFields from '~/components/elements/form/MultiLangFields.vue'

/** snackbar */
import Snackbar from '~/components/elements/Snackbar.vue'
import SnackbarTool from '~/components/elements/SnackbarTool.vue'

/** general */
import Inr from '~/components/elements/Inr.vue'

/** skeleton */
import PageListing from '~/components/skeleton/PageListing.vue'
import SinglePage from '~/components/skeleton/SinglePage.vue'
import ImageThumb from '~/components/skeleton/ImageThumb.vue'
import CamperThumb from '~/components/skeleton/CamperThumb.vue'
import LoadingBar from '~/components/elements/LoadingBar.vue'

/** slots */
import OneRow from '~/components/slots/layouts/OneRow.vue'
import LoginWrapper from '~/components/slots/layouts/LoginWrapper.vue'

/** slots tab */
import TabHolder from '~/components/slots/layouts/TabHolder.vue'
import TabHolderHeading from '~/components/slots/layouts/TabHolderHeading.vue'

/** gallery */
import GalleryInput from '~/components/gallery/GalleryInput.vue'
import GalleryDialog from '~/components/gallery/GalleryDialog.vue'

/** front slots */
import OwlSlider from '~/components/pages/slots/OwlSlider.vue'
import CamperListingThumb from '~/components/pages/slots/CamperListingThumb.vue'
import BlogListingThumb from '~/components/pages/slots/BlogListingThumb.vue'
import BlogListingThumbHorizontal from '~/components/pages/slots/BlogListingThumbHorizontal.vue'
import CamperListingThumbHorizontal from '~/components/pages/slots/CamperListingThumbHorizontal.vue'
import ItemListingThumb from '~/components/pages/slots/ItemListingThumb.vue'
import LanguageSelector from '~/components/main/LanguageSelector.vue'
import CamperFilter from '~/components/main/CamperFilter.vue'
import SingleBookingView from '~/components/main/SingleBookingView.vue'
import Login from '~/components/main/Login.vue'
import Register from '~/components/main/Register.vue'
import Auth from '~/components/main/Auth.vue'
import WishList from '~/components/main/WishList.vue'

import MyPluginComponent from '~/components/main/MyPluginComponent.vue'
import GoogleMapSearch from '~/components/main/GoogleMapSearch.vue'

const components = { MyPluginComponent, GoogleMapSearch, CamperListingThumbHorizontal, Login, Register, Auth, BlogListingThumbHorizontal, NumberInput, WishList, BlogListingThumb, ItemListingThumb, SingleBookingView, CamperListingThumb, CamperThumb, ImageThumb, SinglePage, Checkbox, CamperFilter, CityList, DatePickerRange, LanguageSelector, OwlSlider, DatePicker, ImageGalleryInput, MultiLangFields, LoadingBar, TextEditor, SnackbarTool, Inr, ImageInput, TabHolderHeading, TabHolder, GalleryInput, GalleryDialog, Snackbar, LoginWrapper, PageListing, OneRow, Password, FormLayout, ConfirmPassword, Email, Mobile, TextInput, SelectInput, SelectInputMulti }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
