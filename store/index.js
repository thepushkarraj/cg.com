export const state = () => ({
  isLogin: false,
  darkMode: false,
  lang: 'de',
  langLoc: 'de',
  loginModel: false,
  langCode: 'DE',
  langFlag: '/img/flag/de.png',
  currency: 'EUR',
  cocky: true,
  lastPage: '',
  booking: {
    camper_id: '',
    booking_id: '',
    camper_city: '',
    booking_days: '',
    camper_details: '',
    user_id: '',
    start_date: '',
    end_date: '',
    first_name: '',
    last_name: '',
    email: '',
    address: '',
    phone: '',
    subtotal: '',
    coupon_code: '',
    discount: '',
    addon_price: '',
    addon_details: '',
    total: '',
    city: '',
    postcode: '',
    country: '',
    payble_amount: ''
  },
  languages: [
    { code: 'zh', codeLang: 'tw', show: 'ZH-TW', name: '中国人 (ZH-TW)', flag: '/img/flag/zh-tw.png' },
    { code: 'zh', codeLang: 'cn', show: 'ZH', name: '中国人 (ZH)', flag: '/img/flag/zh.png' },
    { code: 'de', codeLang: 'de', show: 'DE', name: 'Deutsch (DE)', flag: '/img/flag/de.png' },
    { code: 'en', codeLang: 'us', show: 'EN-US', name: 'English (EN-US)', flag: '/img/flag/en-us.png' },
    { code: 'en', codeLang: 'gb', show: 'EN-UK', name: 'English (EN-UK)', flag: '/img/flag/en-uk.png' },
    { code: 'en', codeLang: 'ca', show: 'EN-CA', name: 'English (EN-CA)', flag: '/img/flag/en-ca.png' },
    { code: 'nl', codeLang: 'nl', show: 'NL', name: 'Netherlandic (NL)', flag: '/img/flag/ne.png' }
  ],
  currencies: [
    { code: 'USD', name: 'Us Dollar', sign: '$' },
    { code: 'EUR', name: 'Euro', sign: '€' },
    { code: 'CNY', name: 'Yuan', sign: '¥' }
  ],
  user: {
    id: '',
    role: '',
    first_name: '',
    last_name: '',
    email: '',
    mobile: '',
    name: '',
    token: '',
    address: '',
    city: '',
    country: '',
    postcode: '',
    image: '',
    image_thumb: ''
  },
  data: {
    product: [],
    categories: [],
    brands: [],
    productgroups: [],
    dashboard: [],
    productLisiting: []
  }
})

export const getters = {
  getUser: state => state.user,
  isLogin: state => state.isLogin,
  getLang: state => state.lang,
  getLangCode: state => state.langCode,
  getLangLoc: state => state.langLoc,
  getLangFlag: state => state.langFlag,
  getLastPage: state => state.lastPage,
  getLanguages: state => state.languages,
  getBooking: state => state.booking,
  getCurrencies: state => state.currencies,
  getCurrency: state => state.currency,
  getDarkMode: state => state.darkMode,
  getLoginModel: state => state.loginModel,
  getProductCats: state => state.data,
  getDashboardData: state => state.data.dashboard,
  getProductListing: state => state.data.productLisiting,
  getCocky: state => state.cocky,
  getProductData: state => id => state.data.products.find(product => product.id === id) ?? ''
}

export const mutations = {
  setUserLogin (state, data) {
    state.isLogin = true
    // console.log(data)
    state.user = {
      id: data.data.userdata.id,
      name: data.data.userdata.first_name + ' ' + data.data.userdata.last_name,
      first_name: data.data.userdata.first_name,
      last_name: data.data.userdata.last_name,
      role: data.data.userdata.role,
      image: data.data.userdata.image,
      email: data.data.userdata.email,
      mobile: data.data.userdata.mobile,
      token: data.data.token
    }
    const d = new Date()
    d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000))
    const expires = 'expires=' + d.toUTCString()
    document.cookie = 'cg=' + JSON.stringify(state.user) + ';' + expires + ';path=/'
  },
  updateUserData (state, user) {
    state.user.first_name = user.first_name
    state.user.last_name = user.last_name
    state.user.image = user.image
    state.user.image_thumb_url = user.image_thumb_url
    state.user.email = user.email
    state.user.mobile = user.mobile
    state.user.username = user.username
    state.user.name = user.first_name + ' ' + user.last_name
  },
  setBookingData (state, booking) {
    for (const [key, value] of Object.entries(booking)) {
      // console.log(key, value)
      state.booking[key] = value
    }
  },
  setLangLoc (state, lc) {
    state.langLoc = lc
  },
  setUserData (state, user) {
    state.isLogin = true
    for (const [key, value] of Object.entries(user)) {
      // console.log(key, value)
      state.user[key] = value
    }
  },
  setLastPage (state, url) {
    state.lastPage = url
  },
  setProductData (state, data) {
    state.data.categories = data.categories
    state.data.brands = data.brands
    state.data.productgroups = data.productgroups
    // console.log(state)
  },
  setDashboardData (state, data) {
    state.data.dashboard = data
  },
  setLoginModel (state, data) {
    state.loginModel = data
  },
  setLang (state, show) {
    const l = state.languages
    const index = l.findIndex(ele => ele.show === show)
    const b = l[index]
    l[index] = l[0]
    l[0] = b
    state.lang = b.code
    state.langCode = b.show
    state.langFlag = b.flag
  },
  setLangCode (state, show) {
    const l = state.languages
    const index = l.findIndex(ele => ele.codeLang === show)
    const b = l[index]
    l[index] = l[0]
    l[0] = b
    // console.log(l)
    state.lang = b.code
    state.langCode = b.show
    state.langFlag = b.flag
  },
  setProductListing (state, data) {
    state.data.productLisiting = data
  },
  setCocky (state, data) {
    state.cocky = data
  },
  setProductsData (state, data) {
    if (state.data.products && state.data.products.length > 0) {
      const i = state.data.products.findIndex(x => x.id === data.id)
      if (i > 0) {
        state.data.products[i] = data
      } else if (i === -1) {
        state.data.products.push(data)
      }
    } else {
      state.data.products = []
      state.data.products.push(data)
    }
  },
  setProductsDataFields (state, data) {
    const i = state.data.products.findIndex(x => x.id === data.id)
    const j = state.data.products[i]
    for (const [key] of Object.entries(j)) {
      if (key === data.field) {
        j[key] = data.value
      }
    }
  },
  setUserLogout (state) {
    state.isLogin = false
    state.user = {
      id: '',
      role: '',
      first_name: '',
      last_name: '',
      email: '',
      mobile: '',
      name: '',
      token: '',
      address: '',
      city: '',
      country: '',
      postcode: '',
      image: '',
      image_thumb: ''
    }
    document.cookie = 'cg=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  },
  getSingleImageUrl (state, val) {
    const arr = []
    const imgval = val
    arr.push({ imgval })
    return arr
  }
}
