import RenderAuthorized from '../components/Authorized';
import { getAuthority, } from './authority';

let Authorized = RenderAuthorized(getAuthority()); // eslint-disable-line
// Reload the rights component
const reloadAuthorized = () => {
  Authorized = RenderAuthorized(getAuthority());
};
/**
 * 陈建 add
 */
const checkAuthority=(key)=>{
  let userInfo = sessionStorage.getItem("userInfo");
  if (userInfo) {
      let elements = JSON.parse(userInfo).resources;
      return JSON.stringify(elements).indexOf(key) != -1;
  }
  return false;
}

export { reloadAuthorized,checkAuthority };
export default Authorized;
