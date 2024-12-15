import { post, get } from '../utils/http'
/**
 * 获取Token
 * @param code 
 */
export const createToken = async (code) => {
  try{
		return await post({ url: '/wx/login', data: { code } })
  }catch{
  }
}
/**
 * 获取用户信息
 */
export const getUserInfo = async () => {
  try{
		return await get({ url: '/wxgetUserInfo' })
  }catch{
  }
}