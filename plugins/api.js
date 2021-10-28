export default function (context, inject) {
  const isLogin = context.store.getters.isLogin
  let headers = ''
  if (isLogin) {
    const user = context.store.getters.getUser
    headers = {
      'x-api-key': 'ABCD',
      Accept: 'application/json',
      Authorization: 'Bearer ' + user.token,
      Language: context.store.getters.getLang,
      Location: context.store.getters.getLangLoc
    }
  } else {
    headers = {
      'x-api-key': 'ABCD',
      Language: context.store.getters.getLang,
      Location: context.store.getters.getLangLoc
    }
  }
  const api = context.$axios.create({
    headers
  })
  api.setBaseURL(process.env.mediaBase + '/api/')
  inject('api', api)
}
