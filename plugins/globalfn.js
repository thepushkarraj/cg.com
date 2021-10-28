export default (context, inject) => {
  const langData = (data, lang = null) => {
    if (!lang) {
      lang = context.store.getters.getLang
    }
    // console.log(data)
    if (data) {
      if (typeof data === 'object') {
        if (data[lang]) {
          return data[lang]
        } else {
          return data.en
        }
      }
    }
    return ''
  }
  inject('lang', langData)

  const auth = () => {
    const isLogin = context.store.getters.isLogin
    let headers = ''
    if (isLogin) {
      const user = context.store.getters.getUser
      headers = {
        'x-api-key': 'ABCD',
        Accept: 'application/json',
        Authorization: 'Bearer ' + user.token
      }
    } else {
      headers = {
        'x-api-key': 'ABCD'
      }
    }
    return { headers }
  }
  inject('authHeader', auth)
  inject('pageLimit', 15)
  inject('mediaBase', process.env.mediaBase)
  inject('allStateLanguages', context.store.getters.getLanguages)
  inject('allLanguages', [
    { code: 'zh', name: '中国人 (ZH)', flag: '/img/flag/zh.png' },
    { code: 'de', name: 'Deutsch (DE)', flag: '/img/flag/de.png' },
    { code: 'en', name: 'English (EN)', flag: '/img/flag/en-us.png' },
    { code: 'nl', name: 'Netherlandic (NL)', flag: '/img/flag/ne.png' }
  ])
  inject('allCurrency', context.store.getters.getCurrencies)
  inject('getCurrency', context.store.getters.getCurrency)
  inject('login', context.store.getters.isLogin)
  inject('getLang', context.store.getters.getLang)
  inject('getLangCode', context.store.getters.getLangCode)
  inject('getLangFlag', context.store.getters.getLangFlag)
  inject('getCocky', context.store.getters.getCocky)
  inject('getUser', context.store.getters.getUser)
  inject('getLoginModel', context.store.getters.getLoginModel)
  inject('getBooking', context.store.getters.getBooking)
  inject('getLastPage', context.store.getters.getLastPage)

  const langRequired = (lang) => {
    const cLang = context.store.getters.getLang
    if (cLang === lang) {
      return true
    } else {
      return false
    }
  }
  inject('langRequired', langRequired)
  const toString = (term) => {
    if (term) {
      return term + ' '
    } else {
      return ''
    }
  }
  inject('toString', toString)
  const psJSON = (data) => {
    return JSON.parse(JSON.stringify(data))
  }
  inject('psJSON', psJSON)
  // const LangFlag = () => {
  //   const cLang = context.store.getters.getLang
  //   const aLang = context.store.getters.getLanguages
  //   let flag = ''
  //   aLang.forEach((i) => {
  //     if (i.code === cLang) {
  //       flag = i.flag
  //     }
  //   })
  //   return flag
  // }
  // inject('getLangFlag', LangFlag)
  const roleData = () => {
    const u = context.store.getters.getUser
    let role = ''
    if (u.role === 3) {
      role = 'user'
    } else if (u.role === 2) {
      role = 'vendor'
    } else if (u.role === 1) {
      role = 'admin'
    }
    // console.log(role)
    return role
  }
  inject('userRole', roleData)
  const formatDate = (date) => {
    const str = date
    const newdate = new Date(str)
    const mnth = ('0' + (newdate.getMonth() + 1)).slice(-2)
    const day = ('0' + newdate.getDate()).slice(-2)
    return [newdate.getFullYear(), mnth, day].join('-')
  }
  inject('getDate', formatDate)
  const getprice = (arr) => {
    const today = new Date().getTime()
    let price = ''
    price = ''
    if (typeof arr === 'object') {
      if (arr.length > 0) {
        arr.forEach((ele) => {
          const d1 = new Date(ele.start_date).getTime()
          const d2 = new Date(ele.end_date).getTime()
          if (today >= d1 && today <= d2) {
            price = ele.price
          }
        })
      }
    }
    // console.log(price)
    return price
  }
  inject('seasonPrice', getprice)
  const getCheckoutPrice = () => {
    const gb = context.store.getters.getBooking
    const arr = gb.camper_details.seasonalprice
    if (gb.seasonal_price === 0) {
      return gb.booking_days * gb.camper_details.price
    } else if (typeof arr === 'object') {
      if (arr.length > 0) {
        let date1 = new Date(gb.start_date)
        const dateEnd = new Date(gb.end_date)
        const day = 60 * 60 * 24 * 1000
        let price = 0
        price = 0
        while (date1 < dateEnd) {
          const today = date1.getTime()
          // console.log('booking date' + date1)
          arr.forEach((ele) => {
            const d1 = new Date(ele.start_date).getTime()
            const d2 = new Date(ele.end_date).getTime()
            // console.log(ele.start_date)
            // console.log(ele.end_date)
            if (today >= d1 && today <= d2) {
              // console.log(ele.price)
              price = price + ele.price
            }
          })
          date1 = new Date(date1.getTime() + day)
        }
        return price
      }
    } else {
      return gb.booking_days * gb.camper_details.seasonal_price
    }
  }
  inject('getCheckoutPrice', getCheckoutPrice)
  const getFeaturedImage = (arr, id) => {
    const featured = []
    if (typeof arr === 'object') {
      if (arr.length > 0) {
        arr.forEach((ele) => {
          if (id === ele.id) {
            const i = {
              thumbnail: ele.thumbnail,
              src: ele.src,
              w: ele.w,
              h: ele.h
            }
            featured.push(i)
          } else {
            const i = {
              src: ele.src,
              w: ele.w,
              h: ele.h
            }
            featured.push(i)
          }
        })
      }
    }
    // console.log(featured)
    return featured
  }
  inject('getFeaturedImage', getFeaturedImage)
  const dateFormate = (date) => {
    const d = new Date(date)
    const day = ('0' + d.getDate()).slice(-2)
    const month = ('0' + (d.getMonth() + 1)).slice(-2)
    const year = d.getFullYear()
    return day + '.' + month + '.' + year
  }
  inject('dateFormate', dateFormate)
  const formatter = (price) => {
    return new Intl.NumberFormat('de', {
      style: 'currency',
      currency: 'EUR'
    }).format(price)
  }
  inject('currency', formatter)
  const Yesno = (value) => {
    if (value === 1) {
      return 'Yes'
    } else {
      return 'No'
    }
  }
  inject('Yesno', Yesno)
}
