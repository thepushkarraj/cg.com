export default (context, inject) => {
  const Country = [
    {
      name: {
        en: 'Germany',
        de: 'Deutschland',
        nl: 'Duitsland',
        zh: '德國'
      },
      value: 'DE'
    },
    {
      name: {
        en: 'Taiwan',
        de: 'Taiwan',
        nl: 'Taiwan',
        zh: '台灣'
      },
      value: 'TW'
    },
    {
      name: {
        en: 'United Kingdom',
        de: 'Verenigd Koningkrijk',
        nl: 'Verenigd Koningkrijk',
        zh: '英國'
      },
      value: 'GB'
    },
    {
      name: {
        en: 'United States',
        de: 'Vereinigte Staaten',
        nl: 'Verenigde Staten',
        zh: '美國'
      },
      value: 'US'
    },
    {
      name: {
        en: 'China',
        de: 'China',
        nl: 'China',
        zh: '中國'
      },
      value: 'CN'
    },
    {
      name: {
        en: 'Spain',
        de: 'Spanien',
        nl: 'Spanje',
        zh: '西班牙'
      },
      value: 'ES'
    },
    {
      name: {
        en: 'France',
        de: 'Frankreich',
        nl: 'Frankrijk',
        zh: '法國'
      },
      value: 'FR'
    },
    {
      name: {
        en: 'Netherland',
        de: 'Niederlande',
        nl: 'Nederland',
        zh: '荷蘭'
      },
      value: 'NL'
    },
    {
      name: {
        en: 'Italy',
        de: 'Italien',
        nl: 'Italië',
        zh: '意大利'
      },
      value: 'IT'
    },
    {
      name: {
        en: 'Canada',
        de: 'Kanada',
        nl: 'Canada',
        zh: '加拿大'
      },
      value: 'CA'
    }
  ]
  inject('CountryList', Country)
  inject('countryName', (c) => {
    const lang = context.store.getters.getLang
    if (c) {
      const r = Object.keys(Country).find(key => Country[key].value === c)
      return Country[r].name[lang]
    } else {
      return Country[0].name[lang]
    }
  })
}
